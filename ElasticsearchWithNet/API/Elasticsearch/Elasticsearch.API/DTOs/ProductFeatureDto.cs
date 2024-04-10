using Elasticsearch.API.Enums;

namespace Elasticsearch.API.DTOs
{
    public record ProductFeatureDto(int? Width, int? Height, string? Color)
    {
    }
}
