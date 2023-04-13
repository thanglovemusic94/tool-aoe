import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IReview } from 'app/shared/model/review.model';
import { getEntities } from './review.reducer';

export const Review = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const reviewList = useAppSelector(state => state.review.entities);
  const loading = useAppSelector(state => state.review.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="review-heading" data-cy="ReviewHeading">
        <Translate contentKey="toolaoeApp.review.home.title">Reviews</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="toolaoeApp.review.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/review/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="toolaoeApp.review.home.createLabel">Create new Review</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {reviewList && reviewList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="toolaoeApp.review.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.review.point">Point</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.review.userReviewId">User Review Id</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.review.type">Type</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.review.startDate">Start Date</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.review.endDate">End Date</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.review.ppplicationUser">Ppplication User</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {reviewList.map((review, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/review/${review.id}`} color="link" size="sm">
                      {review.id}
                    </Button>
                  </td>
                  <td>{review.point}</td>
                  <td>{review.userReviewId}</td>
                  <td>
                    <Translate contentKey={`toolaoeApp.Type.${review.type}`} />
                  </td>
                  <td>{review.startDate ? <TextFormat type="date" value={review.startDate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{review.endDate ? <TextFormat type="date" value={review.endDate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>
                    {review.ppplicationUser ? (
                      <Link to={`/application-user/${review.ppplicationUser.id}`}>{review.ppplicationUser.inGame}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/review/${review.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/review/${review.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/review/${review.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="toolaoeApp.review.home.notFound">No Reviews found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Review;
