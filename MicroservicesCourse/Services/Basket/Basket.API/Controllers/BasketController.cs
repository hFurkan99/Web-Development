using Basket.Core.DTOs;
using Basket.Core.Services;
using Microsoft.AspNetCore.Mvc;
using Shared.ControllerBases;

namespace Basket.API.Controllers
{
    public class BasketController : CustomBaseController
    {
        private readonly IBasketService _basketService;

        public BasketController(IBasketService basketService) 
        {
            _basketService = basketService;
        }

        [HttpPost]
        public async Task<IActionResult> SaveOrUpdateBasket(BasketDto basketDto)
        {
            return CreateActionResult(await _basketService.SaveOrUpdateBasket(basketDto));
        }

        [HttpGet]
        public async Task<IActionResult> GetBasket(int userId)
        {
            return CreateActionResult(await _basketService.GetBasket(userId));
        }

        [HttpGet]
        public async Task<IActionResult> DeleteBasket(int userId)
        {
            return CreateActionResult(await _basketService.DeleteBasket(userId));
        }

    }
}
