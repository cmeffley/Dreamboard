using Dapper;
using Dreamboard.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dreamboard.DataAccess
{
    public class DreamsRepository
    {
        readonly string _connectionString;

        public DreamsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Dreamboard");
        }

        internal IEnumerable<Dreams> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var dreams = db.Query<Dreams>(@"Select * From Dreams");

            return dreams;
        }

        internal object GetById(int id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Dreams
                        Where id = @id";

            var singleDream = db.QueryFirstOrDefault<Dreams>(sql, new { id });

            return singleDream;
        }

        internal void AddDream(Dreams dream)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Dreams]
                                    ([Name]
                                    ,[Image])
                                output inserted.Id
                                VALUES
                                    (@name, @image)";

            var id = db.ExecuteScalar<int>(sql, dream);

            dream.Id = id;
        }
    }
}
