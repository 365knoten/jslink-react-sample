
// Import React and needed components
import * as React from "react";
import {
    Rating,
    RatingSize
} from 'office-ui-fabric-react/lib/components/Rating';


export interface RatingJSLinkProps { value: number; onChange?: (s: number) => any }

export class RatingJSLink extends React.Component<RatingJSLinkProps, { value: number }> {

    constructor(props: RatingJSLinkProps) {
        super(props);
        this.state = { value: props.value };
        this._handleChange = this._handleChange.bind(this);
    }


    private _handleChange(rating: number) {
        this.setState({
            value: rating
        });
        this.props.onChange(rating);
    }

    render() {
        return <Rating
            id={'JsLinkRating'}
            min={1}
            max={5}
            size={RatingSize.Large}
            rating={this.state.value}
            onChanged={this._handleChange}
            ariaLabelFormat={'{0} of {1} stars selected'}
        />
    }


}