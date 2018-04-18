import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile';

class Profile extends Component {
  static defaultProps = {
   user: {
     email: 'USER_EMAIL',
     games: [
      {
      winner: true,
       createdAt: '04/18/2018',
       id: '1234'
      },
      {
      winner: false,
      createdAt: '04/18/2017',
      id: '1233'
      },
      {
      winner: false,
      createdAt: '04/18/2017',
      id: '1233'
      }
     ]
   }
  }

  get records() {
    return  this.props.user.games.map((game, index) => {
      return <GameRecord
        key={index}
        index={index}
      >
        <Column>
          {(game.winner) ? 'WON!' : 'NEXT TIME!'}
        </Column>
        <Column>
          'Robot'
        </Column>
        <Column>
          'Wrong'
        </Column>
        <Column>
          {game.createdAt}
        </Column>

      </GameRecord>
    })
  }

  render() {
    let {email} = this.props.user;
    return (
      <div>
        <Container>
          <Name>
            {email}
          </Name>
          <GameList>
            <GameListHeader>My Games</GameListHeader>
            <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
          {this.records}
          </GameList>
        </Container>
      </div>
    )
  }
}

export default Profile
