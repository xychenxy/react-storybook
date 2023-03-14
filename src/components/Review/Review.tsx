import styled from 'styled-components'

import { Body } from '../typography'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const getReview = (rating?: number) => {
  if (!rating) {
    return 'No review yet'
  }

  let reviewText = 'Very poor'

  if (rating >= 2 && rating < 4) {
    reviewText = 'Adequate'
  } else if (rating >= 4 && rating < 5) {
    reviewText = 'Very good'
  } else if (rating >= 5) {
    reviewText = 'Excellent'
  }

  return `* ${rating} ${reviewText}`
}

type ReviewProps = {
  rating?: number
}

export const Review = ({ rating }: ReviewProps) => (
  <Wrapper>
    <Body size="S" type="span" className="review-text">
      {getReview(rating)}
    </Body>
  </Wrapper>
)
