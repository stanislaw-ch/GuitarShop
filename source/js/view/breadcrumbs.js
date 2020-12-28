export const createBreadcrumbsTemplate = () => {
  return (
    `<ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="#" class="breadcrumbs__link">Главная</a>
    </li>
    <li class="breadcrumbs__item breadcrumbs__item--current">
      <a href="#" class="breadcrumbs__link">Каталог</a>
    </li>
  </ul>`
  );
};
