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

  const handleClose = () => {
    navigate('/review');
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
    values.startDate = convertDateTimeToServer(values.startDate);
    values.endDate = convertDateTimeToServer(values.endDate);

    const entity = {
      ...reviewEntity,
      ...values,
      ppplicationUser: applicationUsers.find(it => it.id.toString() === values.ppplicationUser.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          startDate: displayDefaultDateTime(),
          endDate: displayDefaultDateTime(),
        }
      : {
          type: 'THAO_TAC_TAY',
          ...reviewEntity,
          startDate: convertDateTimeFromServer(reviewEntity.startDate),
          endDate: convertDateTimeFromServer(reviewEntity.endDate),
          ppplicationUser: reviewEntity?.ppplicationUser?.id,
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
              <ValidatedField
                label={translate('toolaoeApp.review.startDate')}
                id="review-startDate"
                name="startDate"
                data-cy="startDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('toolaoeApp.review.endDate')}
                id="review-endDate"
                name="endDate"
                data-cy="endDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                id="review-ppplicationUser"
                name="ppplicationUser"
                data-cy="ppplicationUser"
                label={translate('toolaoeApp.review.ppplicationUser')}
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
