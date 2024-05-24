using Ozcorps.Generic.Entity;

namespace UserAPI.Entities;

public sealed class UserRole : EntityBase, IInsertedEntity
{
    public long UserId { get; set; }
    public long RoleId { get; set; }
    public DateTime InsertedDate { get; set; }
    public long InsertedUserId { get; set; }
}