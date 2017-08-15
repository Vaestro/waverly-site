import React from 'react';
import Helmet from 'react-helmet';
import {Image, Button, Divider, Grid} from 'semantic-ui-react';

export default class Contributions extends React.Component {
    constructor(props) {
      super(props);
    }

    renderContributions(array) {
      return(
        array.map(contribution => <li key={contribution}>{contribution}</li>)
      )
    }

    render() {
        return (
          <div>
            <Grid columns={2} stackable>
              <Grid.Row className="grid-row">
                <Grid.Column>
                  <h4 style={{
                    color: '#000000',
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '48px',
                    letterSpacing: '-0.67px'
                  }}>OUR CONTRIBUTIONS</h4>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid columns={2} stackable style={{
              backgroundColor: 'white'
            }}>
              <Grid.Row className="grid-row">
                <Grid.Column>
                  <ul className='contributions'>
                    {this.renderContributions.bind(this, this.props.left)()}
                  </ul>
                </Grid.Column>
                <Grid.Column >
                  <ul className='contributions'>
                    {this.renderContributions.bind(this, this.props.right)()}
                  </ul>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        )
    }
}
