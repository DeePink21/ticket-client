import React, { Component } from "react";

export default class MovieSynopsis extends Component {
  render() {
    let synopsis =
      "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.\n\nOne day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.\n\nKimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.\n\n[Written by MAL Rewrite]";

    return (
      <div className="item">
        <h5 className="sub-title">Synopsis</h5>

        <p>
          {/* {this.props.children} */}
          {synopsis}
        </p>
      </div>
    );
  }
}
