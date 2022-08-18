import React from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useDispatch } from 'react-redux';
import { jumpToStep } from '../../state/reducers/configurationSlice';

export default function SummaryCard(props) {
  const dispatch = useDispatch();
  const { title, content, displayEditButton, step } = props;

  return (
    <div className="summaryCardQuestion">
      <GridContainer direction="column">
        <GridItem className="title">
          <GridContainer direction="row" className="summaryTitleContainer">
            <GridItem className="summaryTitle">
              <div>{title}</div>
            </GridItem>
            {displayEditButton && (
              <GridItem className="title">
                <div>
                  <button onClick={() => dispatch(jumpToStep(step))}>
                    Uredi
                  </button>
                </div>
              </GridItem>
            )}
          </GridContainer>
        </GridItem>
        <GridItem className="content">
          <GridContainer direction="row" justifyContent="space-between">
            <GridItem className="title">
              <GridContainer direction="column">
                {content.contentLeft &&
                  content.contentLeft.map((leftContent) => {
                    return (
                      <GridItem>
                        <div className="leftContentText">{leftContent}</div>
                      </GridItem>
                    );
                  })}
              </GridContainer>
            </GridItem>
            <GridItem className="title">
              <GridContainer direction="column">
                {content.contentRight &&
                  content.contentRight.map((rightContent) => {
                    return (
                      <GridItem className="title">
                        <div className="rightContentText">{rightContent}</div>
                      </GridItem>
                    );
                  })}
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
