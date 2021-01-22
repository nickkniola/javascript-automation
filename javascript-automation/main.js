const jobs = document.querySelectorAll('li.jobs-search-results__list-item a.job-card-list__title');
let counter = 3000

jobs.forEach(job => {
  setTimeout(() => {
    job.click()
    setTimeout(() => {
      const applyButton = document.querySelector('button.jobs-apply-button');
      if (applyButton) {
        applyButton.click();
      }
    }, 1000);
    setTimeout(() => {
      const nextButton = document.querySelector('button.artdeco-button--primary');
      if (nextButton) {
        nextButton.click();
      }
    }, 1000);
     setTimeout(() => {
      const nextButton = document.querySelector('button.artdeco-button--primary');
      if (nextButton) {
        nextButton.click();
      }
    }, 1000);
  }, counter);
  counter += 3200;
});
