using Ozcorps.Generic.Entity;

namespace UserAPI.Entities;

public sealed class RolePermission : EntityBase, IInsertedEntity
{
    public long RoleId { get; set; }

    public long PermissionId { get; set; }

    public DateTime InsertedDate { get; set; }
    
    public long InsertedUserId { get; set; }
}