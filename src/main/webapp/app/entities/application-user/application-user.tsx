import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IApplicationUser } from 'app/shared/model/application-user.model';
import { getEntities } from './application-user.reducer';

export const ApplicationUser = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const applicationUserList = useAppSelector(state => state.applicationUser.entities);
  const loading = useAppSelector(state => state.applicationUser.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="application-user-heading" data-cy="ApplicationUserHeading">
        <Translate contentKey="toolaoeApp.applicationUser.home.title">Application Users</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="toolaoeApp.applicationUser.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/application-user/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="toolaoeApp.applicationUser.home.createLabel">Create new Application User</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {applicationUserList && applicationUserList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="toolaoeApp.applicationUser.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.applicationUser.inGame">In Game</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.applicationUser.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.applicationUser.phone">Phone</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.applicationUser.age">Age</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.applicationUser.startDate">Start Date</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.applicationUser.endDate">End Date</Translate>
                </th>
                <th>
                  <Translate contentKey="toolaoeApp.applicationUser.user">User</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {applicationUserList.map((applicationUser, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/application-user/${applicationUser.id}`} color="link" size="sm">
                      {applicationUser.id}
                    </Button>
                  </td>
                  <td>{applicationUser.inGame}</td>
                  <td>{applicationUser.name}</td>
                  <td>{applicationUser.phone}</td>
                  <td>{applicationUser.age}</td>
                  <td>
                    {applicationUser.startDate ? (
                      <TextFormat type="date" value={applicationUser.startDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {applicationUser.endDate ? <TextFormat type="date" value={applicationUser.endDate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{applicationUser.user ? applicationUser.user.id : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`/application-user/${applicationUser.id}`}
                        color="info"
                        size="sm"
                        data-cy="entityDetailsButton"
                      >
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/application-user/${applicationUser.id}/edit`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/application-user/${applicationUser.id}/delete`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
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
              <Translate contentKey="toolaoeApp.applicationUser.home.notFound">No Application Users found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ApplicationUser;
