import {GuideCategoryEntity} from './guide-category.entity';
import {GuideCategory} from '@instinct-plugin/bobba-rp-types';

export function guideCategoryWire(entity: GuideCategoryEntity): GuideCategory {
  return {
    id: entity.id!,
    name: entity.name,
    color: entity.color,
  };
}
