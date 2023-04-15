import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IApplicationUser } from 'app/shared/model/application-user.model';
import { getEntities as getApplicationUsers } from 'app/entities/application-user/application-user.reducer';
import { IReview } from 'app/shared/model/review.model';
import { Type } from 'app/shared/model/enumerations/type.model';
import { XacNhan } from 'app/shared/model/enumerations/xac-nhan.model';
import { getEntity, updateEntity, createEntity, reset } from './review.reducer';

export const ReviewUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const applicationUsers = useAppSelector(state => state.applicationUser.entities);
  const reviewEntity = useAppSelector(state => state.review.entity);
  const loading = useAppSelector(state => state.review.loading);
  const updating = useAppSelector(state => state.review.updating);
  const updateSuccess = useAppSelector(state => state.review.updateSuccess);
  const typeValues = Object.keys(Type);
  const xacNhanValues = Object.keys(XacNhan);

  const handleClose = () => {
    navigate('/review' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getApplicationUsers({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...reviewEntity,
      ...values,
      applicationUser: applicationUsers.find(it => it.id.toString() === values.applicationUser.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          type: 'THAO_TAC_TAY',
          status: 'Da_Xac_Nhan',
          ...reviewEntity,
          applicationUser: reviewEntity?.applicationUser?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="toolaoeApp.review.home.createOrEditLabel" data-cy="ReviewCreateUpdateHeading">
            <Translate contentKey="toolaoeApp.review.home.createOrEditLabel">Create or edit a Review</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="review-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('toolaoeApp.review.point')}
                id="review-point"
                name="point"
                data-cy="point"
                type="text"
                validate={{
                  min: { value: 0, message: translate('entity.validation.min', { min: 0 }) },
                  max: { value: 10, message: translate('entity.validation.max', { max: 10 }) },
                  validate: v => isNumber(v) || translate('entity.validation.number'),
                }}
              />
              <ValidatedField
                label={translate('toolaoeApp.review.userReviewId')}
                id="review-userReviewId"
                name="userReviewId"
                data-cy="userReviewId"
                type="text"
              />
              <ValidatedField label={translate('toolaoeApp.review.type')} id="review-type" name="type" data-cy="type" type="select">
                {typeValues.map(type => (
                  <option value={type} key={type}>
                    {translate('toolaoeApp.Type.' + type)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField label={translate('toolaoeApp.review.status')} id="review-status" name="status" data-cy="status" type="select">
                {xacNhanValues.map(xacNhan => (
                  <option value={xacNhan} key={xacNhan}>
                    {translate('toolaoeApp.XacNhan.' + xacNhan)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                id="review-applicationUser"
                name="applicationUser"
                data-cy="applicationUser"
                label={translate('toolaoeApp.review.applicationUser')}
                type="select"
              >
                <option value="" key="0" />
                {applicationUsers
                  ? applicationUsers.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.inGame}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/review" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ReviewUpdate;
