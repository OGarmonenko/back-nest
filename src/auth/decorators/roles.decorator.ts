import {SetMetadata} from "@nestjs/common";
import {rolesTypes} from "../../users/enums/roles_types.enum";

export const Roles = (...roles: rolesTypes[]) => SetMetadata('roles', roles);

