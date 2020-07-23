import { Document, Schema } from 'mongoose';
import { Roles } from '../../auth/roles';

export interface User extends Document {
    readonly username: string;
    readonly password: string;
    readonly roles: Roles[];
    readonly pets: [{
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    }]
}
