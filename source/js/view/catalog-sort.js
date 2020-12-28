export const createCatalogSortElement = () => {
  return (
    `<div class="catalog__sort-wrapper">
      <span>Сортировать:</span>
      <ul class="catalog__sort sort">
        <li class="sort__item sort__item--active">
          <a href="#">по цене</a>
        </li>
        <li class="sort__item">
          <a href="#">по популярности</a>
        </li>
      </ul>
      <div class="catalog__sort-buttons">
        <button class="sort-button sort-button--up sort-button--active" type="button"></button>
        <button class="sort-button sort-button--down" type="button"></button>
      </div>
    </div>`
  );
};
