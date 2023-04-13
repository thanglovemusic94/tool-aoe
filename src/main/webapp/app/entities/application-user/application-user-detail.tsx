import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './application-user.reducer';

export const ApplicationUserDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const applicationUserEntity = useAppSelector(state => state.applicationUser.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="applicationUserDetailsHeading">
          <Translate contentKey="toolaoeApp.applicationUser.detail.title">ApplicationUser</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{applicationUserEntity.id}</dd>
          <dt>
            <span id="inGame">
              <Translate contentKey="toolaoeApp.applicationUser.inGame">In Game</Translate>
            </span>
          </dt>
          <dd>{applicationUserEntity.inGame}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="toolaoeApp.applicationUser.name">Name</Translate>
            </span>
          </dt>
          <dd>{applicationUserEntity.name}</dd>
          <dt>
            <span id="phone">
              <Translate contentKey="toolaoeApp.applicationUser.phone">Phone</Translate>
            </span>
          </dt>
          <dd>{applicationUserEntity.phone}</dd>
          <dt>
            <span id="age">
              <Translate contentKey="toolaoeApp.applicationUser.age">Age</Translate>
            </span>
          </dt>
          <dd>{applicationUserEntity.age}</dd>
          <dt>
            <span id="startDate">
              <Translate contentKey="toolaoeApp.applicationUser.startDate">Start Date</Translate>
            </span>
          </dt>
          <dd>
            {applicationUserEntity.startDate ? (
              <TextFormat value={applicationUserEntity.startDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="endDate">
              <Translate contentKey="toolaoeApp.applicationUser.endDate">End Date</Translate>
            </span>
          </dt>
          <dd>
            {applicationUserEntity.endDate ? (
              <TextFormat value={applicationUserEntity.endDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="toolaoeApp.applicationUser.user">User</Translate>
          </dt>
          <dd>{applicationUserEntity.user ? applicationUserEntity.user.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/application-user" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/application-user/${applicationUserEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ApplicationUserDetail;
