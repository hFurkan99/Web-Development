using Nest;

namespace Elasticsearch.API.Models
{
    public class GeocodeModel
    {
        public FieldsModel fields { get; set; } = null!;
        public string? level { get; set; }
        public string? message { get; set; }
        public string? messageTemplate { get; set; }
    }

    public class FieldsModel
    {
        public string? RequestId { get; set; }
        public string? RequestPath { get; set; }
        public string? SourceContext { get; set; }
        public List<string>? accId { get; set; }
        public List<string>? appCode { get; set; }
        public string? ConnectionId { get; set; }
        public long? elapsedTime { get; set; }
        public string? ipAddress { get; set; }
        public string? machineName { get; set; }
        public string? path { get; set; }
        public string? requestBody { get; set; }
        public string? requestMethod { get; set; }
        public string? requestUrl { get; set; }
        public string? statusCode { get; set; }
    }
}