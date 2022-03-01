using Dreamboard.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dreamboard.Controllers
{
    [Route("dreams")]
    [ApiController]
    public class DreamsController : ControllerBase
    {
        DreamsRepository _repo;

        public DreamsController(DreamsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllDreams()
        {
           return Ok(_repo.GetAll());
        }

    }
}
