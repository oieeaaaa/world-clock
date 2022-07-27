import React, { useState } from 'react';
import { 
  StyledTimezones,
  StyledTimezoneList
} from './timezones.styled';
import usePrefetchTimezones from '../../hooks/usePrefetchTimezones';
import allowedTimezones from '../../data/allowedTimezones.json';
import formatTimezone from '../../utils/formatTimezone';
import TimeCard, { TimeCardAdd } from '../time-card';
import TimezoneForm from '../timezone-form';

const Timezones = () => {
  const timezoneOptions = usePrefetchTimezones(allowedTimezones);
  const [timezones, setTimezones] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState({ timezone: '', label: '' });

  const onAdd = (e) => {
    e.preventDefault();

    // defining each validations
    const isRequired = !form.timezone;
    const isMaxLengthReached = timezones.length >= 4;
    const isExisting = timezones.find(item => item.timezone === form.timezone);

    // basic validation
    if (isRequired) {
      alert("Timezone is required.")
    } else if (isMaxLengthReached) {
      alert("You can only add up to 4 timezones.")
    } else if (isExisting) {
      alert("Can't add the same timezone twice.");
    } else {
      setTimezones(prev => prev.concat({
        ...timezoneOptions[form.timezone],
        label: !form.label ? formatTimezone(form.timezone) : form.label
      }));
      setForm({ timezone: '', label: '' });
      setIsFormOpen(false);
    }
  };

  const onRemove = key => {
    setTimezones(prev => prev.filter(item => item.timezone !== key));
  }

  const handleInputChange = e => setForm(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));

  return (
    <StyledTimezones>
      <StyledTimezoneList>
        {!!timezones.length && timezones.map(item => (
          <TimeCard 
            key={item.timezone}
            label={item.label}
            timezone={item.timezone}
            timezoneAbbrv={item.abbreviation}
            timezoneOffset={item.raw_offset}
            onRemove={onRemove}
          />
        ))}
        {timezones.length < 4 && (
          <TimeCardAdd onClick={() => setIsFormOpen(true)} />
        )}
      </StyledTimezoneList>
      <TimezoneForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAdd={onAdd}
        onChange={handleInputChange}
        form={form}
        timezoneOptions={timezoneOptions}
      />
    </StyledTimezones>
  );
};

export default Timezones;
