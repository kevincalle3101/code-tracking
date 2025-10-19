import { EntitySchema } from 'typeorm';
import { CompanyRolePermission } from 'src/domain/entities/company-role-permission.entity';

export const CompanyRolePermissionSchema = new EntitySchema<CompanyRolePermission>({
    name: 'CompanyRolePermission',
    target: CompanyRolePermission,
    tableName: 'company_role_permission',
    columns: {
        companyRoleId: { type: 'int', primary: true },
        permissionId: { type: 'int', primary: true },
        createdAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' },
        updatedAt: { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }
    }
});