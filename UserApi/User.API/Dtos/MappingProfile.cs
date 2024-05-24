using AutoMapper;
using UserAPI.Entities;

namespace UserAPI.Dtos;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<User, UserDto>().
            ForMember(x => x.Password, opt => opt.MapFrom(x => "***")).
            ReverseMap();
    }
}