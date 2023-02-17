// https://app.asana.com/0/0/1202975546597582/1203252452601507/f
import queryString from 'query-string';
import dotObject from 'dot-object';
import _merge from 'lodash.merge';
const Handlebars = require('handlebars');
const helpers = require('handlebars-helpers')({
  handlebars: Handlebars,
});
const _isEqual = require('lodash.isequal');
Handlebars.registerHelper('_isEqual', (a, b, c, d) => {
  return _isEqual(a, b) ? c : d;
});

let variablesNotCompiled = {
  metadata: {
    accountName: 'acme',
    accountUrl: 'acme.sandbox.loanwell.com',
    accountAddress: '212 West Main Street, Suite 303, Durham, NC 27707',
    accountLogoUrl: '',
    accountMainColor: '#0D1367',
  },
  html: "<div style=\"text-align:left;\"><p>n!! That's a great accomplishment and a big step forward. Since you paid back the loan, those proceeds are now available for another Employee in need.</p><p><b>Next Step:</b>Click <a href=\"{{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'Activate Work' 'https://activatework.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'Apartment Life' 'https://apartmentlife.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'Argentum' 'https://argentum.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'CBCFCU' 'https://cbcfcu.communityimpactfund.org/savings-incentive/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'CHROME Federal Credit Union' 'https://chromefcu.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'Interra Credit Union' 'https://interracu.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'LIV Community Partners' 'https://liv.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'Lookout CU' 'https://lookoutcu.communityimpactfund.org/savings-incentive/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'PITT OHIO' 'https://pittohio.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'PSCU' 'https://pscu.communityimpactfund.org/savings-incentive/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'The Republic of Tea' 'https://republicoftea.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'Rex Glass and Mirror Company' 'https://rexglass.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'Tucoemas FCU' 'https://tucoemas.communityimpactfund.org/savings-incentive-form/' ''}}} {{{_isEqual record.payload.newImage.f73a9657172a40e0b9861df082713a35 'WEOKIE Federal Credit Union' 'https://weokiefcu.communityimpactfund.org/savings-incentive-form/' ''}}}\">HERE</a> to see if you meet the criteria, then fill out the form.  Please note, you must also meet the following:<ul><li>Apply within 90 days of this email</li><li>Must still be employed with the employer who sponsored the loan</li><li>If you are applying for a second loan, the savings incentive needs to be completed first before you apply for the second loan.  If you would just like the second loan immediately, you will not be eligible to apply for the savings incentive.</li></ul>Once you have filled out the form, we will review the information, and if you meet the qualifications, you will get an email from Zelle on how to claim your payment.</p><p>We'd love to hear how this loan program has impacted you.  Click on the link <a href=\"https://communityimpactfund.org/thank-you/\">here</a> to submit your thoughts.</p><p>Please let me know if you have any questions.</p><p>Thanks,<br>The Community Impact Fund Team</p></div>",
  heading: 'Congratulations, you have paid off your loan!!',
  buttonText: 'View Loan',
  buttonLink:
    '{{environmentUrl}}/agreements/{{record.payload.newImage.id}}/overview',
};

let queryParams = queryString.parse(window.location.search);
queryParams = dotObject.object(queryParams);
variablesNotCompiled = _merge({}, variablesNotCompiled, queryParams);

const template = Handlebars.compile(JSON.stringify(variablesNotCompiled));

let inMemoryData = {
  environmentUrl: 'https://acme.loanwell.com',
  record: {
    payload: {
      newImage: {
        accountStatus: '13',
        id: '123',
        borrowerFirstName: '',
        borrowerEmail: '',
        f73a9657172a40e0b9861df082713a35: 'Activate Work',
      },
    },
  },
};

inMemoryData = _merge({}, inMemoryData, queryParams.inMemoryData);

console.log(inMemoryData);

const result = template({ ...inMemoryData });

console.log(result);

export const variables = JSON.parse(result);
