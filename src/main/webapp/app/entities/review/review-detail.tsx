import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './review.reducer';

export const ReviewDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const reviewEntity = useAppSelector(state => state.review.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="reviewDetailsHeading">
          <Translate contentKey="toolaoeApp.review.detail.title">Review</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{reviewEntity.id}</dd>
          <dt>
            <span id="point">
              <Translate contentKey="toolaoeApp.review.point">Point</Translate>
            </span>
          </dt>
          <dd>{reviewEntity.point}</dd>
          <dt>
            <span id="userReviewId">
              <Translate contentKey="toolaoeApp.review.userReviewId">User Review Id</Translate>
            </span>
          </dt>
          <dd>{reviewEntity.userReviewId}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="toolaoeApp.review.type">Type</Translate>
            </span>
          </dt>
          <dd>{reviewEntity.type}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="toolaoeApp.review.status">Status</Translate>
            </span>
          </dt>
          <dd>{reviewEntity.status}</dd>
          <dt>
            <Translate contentKey="toolaoeApp.review.applicationUser">Application User</Translate>
          </dt>
          <dd>{reviewEntity.applicationUser ? reviewEntity.applicationUser.inGame : ''}</dd>
        </dl>
        <Button tag={Link} to="/review" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/review/${reviewEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ReviewDetail;
