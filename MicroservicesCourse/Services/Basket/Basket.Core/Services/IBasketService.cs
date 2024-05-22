
using Basket.Core.DTOs;
using Shared.DTOs;

namespace Basket.Core.Services
{
    public interface IBasketService
    {
        Task<CustomResponseDto<NoContentDto>> SaveOrUpdateBasket(BasketDto basketDto);
        Task<CustomResponseDto<BasketDto>> GetBasket(int userId);
        Task<CustomResponseDto<NoContentDto>> DeleteBasket(int userId);
    }
}
