import factory from 'factory-girl'
import ResourceJSON from '../../../backend/decorators/resource-json.interface'
import './property-json.factory'
import PropertyJSON from '../../../backend/decorators/property-json.interface'

factory.define<ResourceJSON>('ResourceJSON', Object, {
  id: 'someResource',
  name: 'somename',
  href: '/admin/resourcename',
  titleProperty: () => factory.build<PropertyJSON>('PropertyJSON'),
  parent: {
    name: 'somename',
    icon: 'someicon',
  },
  resourceActions: [],
  listProperties: [],
  showProperties: [],
  filterProperties: [],
  editProperties: [],
})
