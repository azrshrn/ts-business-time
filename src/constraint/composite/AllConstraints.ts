import * as moment from "moment"
import {IBusinessTimeConstraint} from "../BusinessTimeConstraint"
import {AnyConstraint} from "./AnyConstraint"
import {ICombinatorialConstraint} from "./ICombinatorialConstraint"
import {NotConstraint} from "./NotConstraint"

export class AllConstraints implements ICombinatorialConstraint {
    private readonly constraints: IBusinessTimeConstraint[]

    constructor(...constraints: IBusinessTimeConstraint[]) {
        this.constraints = constraints
    }


        }

        return true
    }

    /**
     * The methods from ICombinatorialConstraint have to be re-implemented here
     * instead of inheriting from a base-class as TypeScript does not allow
     * circular imports.
     */

    andAlso(...additional: IBusinessTimeConstraint[]): ICombinatorialConstraint {
        return new AllConstraints(this, ...additional)
    }

    orAlternatively(...alternatives: IBusinessTimeConstraint[]): ICombinatorialConstraint {
        return new AnyConstraint(this, ...alternatives)
    }

    exceptFor(...exceptions: IBusinessTimeConstraint[]): ICombinatorialConstraint {
        return new AllConstraints(this, new NotConstraint(...exceptions))
    }
}
test i don't know anything' +
'still learning'
