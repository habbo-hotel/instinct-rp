import {Link} from 'wouter';
import React, {useContext, useState} from 'react';
import {LifestyleLayout} from '../LifestyleLayout';
import {sessionContext, setURL} from '@instinct-web/core';
import {exampleBusiness} from '@instinct-plugin/bobba-rp-types';
import {useFetchAllBusinesses} from '@instinct-plugin/bobba-rp-web';
import {SearchFilters} from '../../../components/search-filters/SearchFilters';

setURL('lifestyle/companies', <ListCompanies />);

export function ListCompanies() {
  const {user} = useContext(sessionContext);
  const businesses = useFetchAllBusinesses();
  const ownedBusinesses =
    businesses?.filter(_ => _.owner.id === user!.id) ?? [];
  const [filter, setFilter] = useState('');

  const filteredBusinesses =
    businesses?.filter(_ => _.name.toLowerCase().includes(filter)) ?? [];

  const getSearchFilters = () => {
    return (
      <>
        <SearchFilters
          filters={[
            {
              type: 'select',
              label: 'Location',
              options: [],
            },
            {
              type: 'select',
              label: 'Industry',
              options: [],
            },
            {
              type: 'select',
              label: 'Company Size',
              options: [],
            },
            {
              type: 'select',
              label: 'Job Listings',
              options: [],
            },
          ]}
        />
        <div style={{height: 15, width: '100%'}} />
      </>
    );
  };

  return (
    <LifestyleLayout results={0} header={getSearchFilters()}>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 container"
            data-v-096b7bc9=""
            data-v-6c1db704=""
            style={{margin: 0, width: '100%', maxWidth: '100%'}}
          >
            <Link to="/lifestyle/companies/1" style={{cursor: 'pointer'}}>
              <a className="left" data-v-6c1db704="">
                <div className="circle common" data-v-6c1db704="">
                  <img
                    data-v-6c1db704=""
                    src="https://www.habborator.org/badges/badges/NWB.gif"
                    style={{
                      marginTop: 10,
                      marginLeft: 1,
                      width: 100,
                      height: 100,
                    }}
                  />
                </div>
                <div className="name" data-v-6c1db704="">
                  {exampleBusiness.name}
                </div>
              </a>
            </Link>
            <div className="right" data-v-6c1db704="">
              <div className="info-segment" data-v-6c1db704="">
                <span
                  className="tag"
                  data-v-6c1db704=""
                  style={{color: '#40c8d7'}}
                >
                  Established
                </span>
                <div
                  className="value-field"
                  data-v-6c1db704=""
                  style={{width: 100}}
                >
                  May 01, 2022
                </div>
              </div>
              <div className="info-segment" data-v-6c1db704="">
                <span
                  className="tag"
                  data-v-6c1db704=""
                  style={{color: '#40c8d7'}}
                >
                  Total Employees
                </span>
                <div
                  className="value-field"
                  data-v-6c1db704=""
                  style={{width: 100}}
                >
                  10
                </div>
              </div>
              <div className="info-segment" data-v-6c1db704="">
                <span
                  className="tag"
                  data-v-6c1db704=""
                  style={{color: '#40c8d7'}}
                >
                  Established
                </span>
                <div
                  className="value-field"
                  data-v-6c1db704=""
                  style={{width: 100}}
                >
                  May 01, 2022
                </div>
              </div>
              <div
                className="info-segment"
                data-v-6c1db704=""
                style={{borderLeft: '1px solid white'}}
              >
                <div className="ml-4 mt-3">
                  <div className="row">
                    <img
                      src="https://www.habbo.com.br/habbo-imaging/avatarimage?figure=cc-3294-1429-1429.hr-3090-39.lg-3023-1429.ha-3415-1429-1336.sh-300-64.ch-215-1429.hd-209-8&headonly=1"
                      style={{marginTop: 0}}
                    />
                    <span
                      style={{
                        fontSize: 15,
                        color: 'white',
                        textTransform: 'uppercase',
                        marginTop: 25,
                      }}
                    >
                      Chris
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LifestyleLayout>
  );
}
