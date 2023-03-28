import React from 'react';
import { Button } from 'react-bootstrap';

const NewsletterForm = () => (
  <form className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
    <div className="mb-2 md:mr-2">
      <h5 className="text-lg font-bold mb-1">Subscribe to our newsletter</h5>
      <p className="text-sm">Monthly digest of what's new and exciting from us.</p>
    </div>
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <label htmlFor="newsletter1" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter1"
        type="text"
        className="form-input w-full md:w-auto"
        placeholder="Email address"
      />
      <Button variant="primary" type="button">
        Subscribe
      </Button>
    </div>
  </form>
);

export default NewsletterForm;