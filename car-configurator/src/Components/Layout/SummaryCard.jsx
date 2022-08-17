import React, { useState, useEffect } from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserInfo } from '../../state/reducers/configurationSlice';

export default function SummaryCard(props) {
  const dispatch = useDispatch();
  const { title, content, ...rest } = props;

  return (
    <div className="modalWindowContainerQuestion">
      <GridContainer direction="column">
        <GridItem className="title">
          <GridContainer direction="row">
            <GridItem className="title">
              <div>{title}</div>
            </GridItem>
            <GridItem className="title">
              <div>
                <button onClick={null}>Uredi</button>
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem className="content">
          <GridContainer direction="row">
            <GridItem className="title">
              <GridContainer direction="column">
                {content.contentLeft &&
                  content.contentLeft.map((leftContent) => {
                    return (
                      <GridItem className="title">
                        <div>{leftContent}</div>
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
                        <div>{rightContent}</div>
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