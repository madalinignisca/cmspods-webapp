import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const hetznerServerType = (props) => {
    return (
        <FormGroup check>
            <Label check>
              <Input type="radio" name="serverType" value={props.serverType.name} />{' '}
              {props.serverType.description}
            </Label>
        </FormGroup>
    )
}

export default hetznerServerType;
