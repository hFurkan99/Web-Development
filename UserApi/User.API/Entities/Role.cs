﻿using Ozcorps.Generic.Entity;

namespace UserAPI.Entities;

public partial class Role : EntityBase, IModifiedEntity
{
    public string Name { get; set; }
    public bool IsDeleted { get; set; }
    public bool IsActive { get; set; }
    public DateTime? InsertedDate { get; set; }
    public DateTime? ModifiedDate { get; set; }
    public long? InsertedUserId { get; set; }
    public long? ModifiedUserId { get; set; }
}