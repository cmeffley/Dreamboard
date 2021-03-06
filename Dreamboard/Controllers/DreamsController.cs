using Dreamboard.DataAccess;
using Dreamboard.Models;
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

        [HttpGet("{id}")]
        public IActionResult GetOneDream(int id)
        {
            var dream = _repo.GetById(id);

            if (dream == null) return NotFound($"Dream with the Id of {id} was not found");

            return Ok(dream);
        }

        [HttpPost]
        public IActionResult CreateNewDream(Dreams dream)
        {
            _repo.AddDream(dream);

            return Created($"dreams/{dream.Id}", dream);
        }

        [HttpPut("{id}")]
        public IActionResult EditDream(int id, Dreams dream)
        {
            var dreamToEdit = _repo.GetById(id);
            if (dreamToEdit == null) return NotFound($"Unable to find Dream with id {id} to edit");

            var updateDream = _repo.Update(id, dream);
            return Ok(updateDream);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDream(int id)
        {
            _repo.Delete(id);
            return Ok($"Your dream has been permanently deleted");

        }
    }
}
