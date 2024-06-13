using Basket.Core.DTOs;
using Basket.Core.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Localization;
using Shared;
using Shared.DTOs;
using Shared.Exceptions;

namespace Basket.Caching.Services
{
    public class BasketService : IBasketService
    {
        private readonly IMemoryCache _memoryCache;
        private readonly IStringLocalizer<SharedLocalization> _localizer;



        public BasketService(IMemoryCache memoryCache, IStringLocalizer<SharedLocalization> localizer)
        {
            _memoryCache = memoryCache;
            _localizer = localizer;
        }

        public Task<CustomResponseDto<NoContentDto>> DeleteBasket(int userId)
        {
            _memoryCache.Remove("basket_" + userId);
            return Task.FromResult(CustomResponseDto<NoContentDto>.Success(StatusCodes.Status200OK));
        }

        public Task<CustomResponseDto<BasketDto>> GetBasket(int userId)
        {
            if (userId < 0)
            {
                throw new ClientSideException(_localizer["Welcome"]);
            }
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
