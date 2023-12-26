using demo.Application.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace demo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        //Bu sınıftan kalıtım alan diğer sınıflar mediator kullanabilecek
        private IMediator _mediator;

        protected IMediator Mediator =>
            _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        protected ActionResult HandleResult<T>(Results<T> result)
        {
            if (result == null)
            {
                return NotFound();
            }

            if (result.IsSuccess && result.Value != null)
            {
                return Ok(result.Value);
            }

            if (result.IsSuccess && result.Value == null)
            {
                return NotFound();
            }

            return BadRequest(result.Error);
        }
    }
}
