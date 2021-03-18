import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const RenderFormData = ({ formData, signerInfo }) => {
  const { familyInfo, familyMember } = formData;
  const {
    phone_one,
    phone_two,
    emergencyContact,
    vehicle,
    last_payment_address,
    homeless_info,
    gov_benefits,
    insurance,
    domestic_violence_info,
    pets,
  } = familyInfo;

  return (
    <div>
      <h3>Form Data Goes Here</h3>
      <Card title="User Information">
        <ul>
          <li>First Name:{signerInfo.first_name}</li>
          <li>Last Name:{signerInfo.last_name}</li>
          <li>Email: {signerInfo.email}</li>
        </ul>
      </Card>
      <Card
        title="Contact Information"
        headStyle={{ fontSize: '1.5rem', fontWeight: 'bold' }}
      >
        <Title level={5}>{phone_one.name}</Title>
        <ul>
          <li>Phone Number: {phone_one.number}</li>
          <li>
            {phone_one.safeToLeaveMssg
              ? 'Safe to Leave Messages'
              : 'Do Not Leave Messages'}
          </li>
        </ul>
        <Title level={5}>{phone_two.name}</Title>
        <ul>
          <li>Phone Number: {phone_two.number}</li>
          <li>
            {phone_two.safeToLeaveMssg
              ? 'Safe to Leave Messages'
              : 'Do Not Leave Messages'}
          </li>
        </ul>
      </Card>
      <Card
        title="Vehicle Information"
        headStyle={{ fontSize: '1.25rem', fontWeight: 'bold' }}
      >
        <ul>
          <li>Make: {vehicle.make} </li>
          <li>Year: {vehicle.year} </li>
          <li>Color: {vehicle.color} </li>
          <li>Model: {vehicle.model} </li>
          <li>License Plate: {vehicle.license_plate} </li>
        </ul>
      </Card>
      <Card
        title="Housing history"
        headStyle={{ fontSize: '1.25rem', fontWeight: 'bold' }}
      >
        <ul>
          <li>Last Permenant Address: {last_payment_address}</li>
          <li>
            Length of stay at last permenant residence:{' '}
            {homeless_info.length_at_prior_location}
          </li>
          <li>Most recent residency: {homeless_info.prior_location}</li>
          <li>
            Length at current residence:{' '}
            {homeless_info.length_at_current_residence}
          </li>
          <li>
            Number of times homeless in the past two years:{' '}
            {homeless_info.num_times_homeless}
          </li>
          <li>
            Total length of homelessness in teh past two years:{' '}
            {homeless_info.total_len_homeless}
          </li>
          <li>
            Most recent date you became homeless:{' '}
            {homeless_info.homeless_start_date}
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default RenderFormData;
