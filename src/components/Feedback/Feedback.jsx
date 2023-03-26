import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementOnGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleIncrementOnNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleIncrementOnBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return 100 / (this.countTotalFeedback() / good);
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={[
              this.handleIncrementOnGoodFeedback,
              this.handleIncrementOnNeutralFeedback,
              this.handleIncrementOnBadFeedback,
            ]}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
