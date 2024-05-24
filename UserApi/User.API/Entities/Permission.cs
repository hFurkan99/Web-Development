using Ozcorps.Generic.Entity;

namespace UserAPI.Entities;

public sealed class Permission : EntityBase
{
    public string Name { get; set; }
    public string? Description { get; set; }
}