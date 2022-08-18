import React from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector, useDispatch } from 'react-redux';
import { jumpToStep } from '../../state/reducers/configurationSlice';

export default function SummaryCard(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.configuration);
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
        <GridItem
          className="content"
          style={{ marginTop: title === '' ? '52px' : '20px' }}
        >
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
                  content.contentRight.map((rightContent, ix) => {
                    return (
                      <GridItem className="title">
                        {step === 2 &&
                        state.discounted &&
                        ix === content.contentRight.length - 2 ? (
                          <div className="rightContentText">
                            Popust (30%): -{rightContent} KN
                          </div>
                        ) : step === 2 &&
                          ix === content.contentRight.length - 1 ? (
                          <div className="rightContentText">
                            UKUPNO:{' '}
                            <div className="rightContentTotalValue">
                              {rightContent} KN
                            </div>
                          </div>
                        ) : (
                          <div className="rightContentText">{rightContent}</div>
                        )}
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
