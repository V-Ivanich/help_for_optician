// Фаска с припуском
import { Bevel } from './allFormuls/bevel'
// Плоская фаска
import { FlatBevel } from './allFormuls/flatBevel'
// Пересчет цвета
import { Colors } from './allFormuls/colors'
// Стрелка прогиба
import { DeflectionArrow } from './allFormuls/deflectionArrow'
// Клин
import { Wedge } from './allFormuls/wedge'
// Мертввый цвет
import { DeadColor } from './allFormuls/deadColor'
// Формулы треугольников
import { Triangles } from './allFormuls/triangles'
// Перевод радиан / градусы
import { RadiansDegrees } from './allFormuls/radiansDegrees'
// Состояние кнопок меню
import { StatusButtons } from './statusButtons'
// Поиск в коллекции елемента соответствующий кнопке
import { CardsList } from './cardsList'
// Фильтрация/выбор формул для расчетов
import FiltersFormul from './filtersFormul'

export const Formul = {
  Bevel,
  FlatBevel,
  Colors,
  DeflectionArrow,
  Wedge,
  DeadColor,
  Triangles,
  RadiansDegrees,
  StatusButtons,
  CardsList,
  FiltersFormul,
}
