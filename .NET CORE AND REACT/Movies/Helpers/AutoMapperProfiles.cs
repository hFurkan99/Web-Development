using AutoMapper;
using Movies.Domain;
using Movies.DTOs;

namespace Movies.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<MovieDTO, Movie>().ReverseMap();
            CreateMap<MovieCreationDTO, Movie>()
                .ForMember(x => x.Poster, options => options.Ignore()); // formfile ı stringe çevirmemek için ignorelandı
        }
    }
}
