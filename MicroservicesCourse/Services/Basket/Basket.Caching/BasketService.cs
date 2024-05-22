using Basket.Core.DTOs;
using Basket.Core.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Shared.DTOs;

namespace Basket.Caching
{
    public class BasketService : IBasketService
    {
        private readonly IMemoryCache _memoryCache;
        

        public BasketService(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public Task<CustomResponseDto<NoContentDto>> DeleteBasket(int userId)
        {
            _memoryCache.Remove("basket_" + userId);
            return Task.FromResult(CustomResponseDto<NoContentDto>.Success(StatusCodes.Status200OK));
        }

        public Task<CustomResponseDto<BasketDto>> GetBasket(int userId)
        {
            var basket = _memoryCache.Get<BasketDto>("basket_" + userId);
            return Task.FromResult(CustomResponseDto<BasketDto>.Success(StatusCodes.Status200OK, basket));
        }

        public Task<CustomResponseDto<NoContentDto>> SaveOrUpdateBasket(BasketDto basketDto)
        {
            _memoryCache.Set("basket_" + basketDto.UserId, basketDto);
            return Task.FromResult(CustomResponseDto<NoContentDto>.Success(StatusCodes.Status201Created));
        }
    }
}
