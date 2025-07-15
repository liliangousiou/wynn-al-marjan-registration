import React from 'react';

import info from 'assets/info.svg';

import './index.scss';

interface LabelProps {
  name: string;
  title: string;
}

const Label: React.FC<LabelProps> = ({ name, title }) => (
  <label>
    <div>
      {name} <span>*</span>
    </div>
    <img src={info} alt={name} title={title} />
  </label>
);

export default Label;
