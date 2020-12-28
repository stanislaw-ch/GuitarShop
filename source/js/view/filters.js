export const createFiltersElement = () => {
  return (
    `<h2>Фильтр</h2>
    <form class="catalog__filters-form" action="#" method="GET">
      <fieldset>
        <h3>Цена, ₽</h3>
        <div class="catalog__filters-price-wrapper">
          <input type="text" name="filters-form-price-from" id="filters-form-price-from" placeholder="1 000" value="1 000">
          <input type="text" name="filters-form-price-to" id="filters-form-price-to" placeholder="30 000" value="30 000">
        </div>
      </fieldset>
      <fieldset>
        <h3>Тип гитар</h3>
        <div class="catalog__filters-type-wrapper">
          <div class="catalog__filters-type-content-wrapper">
            <input class="visually-hidden" type="checkbox" name="filters-form-type" id="filters-form-type-value-1">
            <label for="filters-form-type-value-1">Акустические гитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input class="visually-hidden" type="checkbox" name="filters-form-type" id="filters-form-type-value-2" checked="">
            <label for="filters-form-type-value-2">Электрогитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input class="visually-hidden" type="checkbox" name="filters-form-type" id="filters-form-type-value-3" checked="">
            <label for="filters-form-type-value-3">Укулеле</label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <h3>Количество струн</h3>
        <div class="catalog__filters-amount-wrapper">
          <label>
            <input class="visually-hidden" type="checkbox" name="filters-form-amount" id="4" checked="">
            <span>4</span>
          </label>
          <label>
            <input class="visually-hidden" type="checkbox" name="filters-form-amount" id="6" checked="">
            <span>6</span>
          </label>
          <label>
            <input class="visually-hidden" type="checkbox" name="filters-form-amount" id="7">
            <span>7</span>
          </label>
          <label>
            <input class="visually-hidden" type="checkbox" name="filters-form-amount" id="12" disabled="">
            <span>12</span>
          </label>
        </div>
      </fieldset>
      <button type="submit" disabled="">показать</button>
    </form>`
  );
};
