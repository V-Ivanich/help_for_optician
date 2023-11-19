import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../errors/errorPage.jsx'
import { InfoPage } from '../info/info.jsx'
import { GeneralPages } from './generalPages.jsx'
import { Bevel } from '../bevel/Bevel.jsx'
import { FlatBevel } from '../flatBevel/FlatBevel.jsx'
import { Colors } from '../colorsRings/Colors.jsx'
import { DeflectionArrow } from '../deflectionArrow/DeflectionArrow.jsx'
import { Wedge } from '../wedge/Wedge.jsx'
import { DeadColor } from '../deadColor/DeadColor.jsx'
import { Triangles } from '../triangles/Triangles.jsx'
import { RadiansDegrees } from '../radiansDegrees/RadiansDegrees.jsx'
import { MyHistorys } from '../history/MyHistorys.jsx'
import { MyVersions } from '../versions/MyVersions.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <GeneralPages />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'info',
    element: <InfoPage />,
    children: [
      {
        path: 'page_bevel',
        element: <Bevel />,
      },
      {
        path: 'page_flatbevel',
        element: <FlatBevel />,
      },
      {
        path: 'page_colors',
        element: <Colors />,
      },
      {
        path: 'page_deflectionarrow',
        element: <DeflectionArrow />,
      },
      {
        path: 'page_wedge',
        element: <Wedge />,
      },
      {
        path: 'page_deadcolor',
        element: <DeadColor />,
      },
      {
        path: 'page_triangles',
        element: <Triangles />,
      },
      {
        path: 'page_rad_deg',
        element: <RadiansDegrees />,
      },
      {
        path: 'page_myhistorys',
        element: <MyHistorys />,
      },
      {
        path: 'page_myversions',
        element: <MyVersions />,
      },
    ],
  },
])

export const Root = () => {
  return <RouterProvider router={router} />
}
