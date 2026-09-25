import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },

  {
    path: 'lista',
    loadComponent: () =>
      import('./lista/lista.page').then((m) => m.ListaPage),
  },

  {
    path: 'accordion',
    loadComponent: () =>
      import('./accordion/accordion.page').then((m) => m.AccordionPage),
  },

  {
    path: 'action-sheet',
    loadComponent: () =>
      import('./action-sheet/action-sheet.page').then((m) => m.ActionSheetPage),
  },

  {
    path: 'alert',
    loadComponent: () =>
      import('./alert/alert.page').then((m) => m.AlertPage),
  },

  {
    path: 'avatar',
    loadComponent: () =>
      import('./avatar/avatar.page').then((m) => m.AvatarPage),
  },

  {
    path: 'badge',
    loadComponent: () =>
      import('./badge/badge.page').then((m) => m.BadgePage),
  },

  {
    path: 'breadcrumb',
    loadComponent: () =>
      import('./breadcrumb/breadcrumb.page').then((m) => m.BreadcrumbPage),
  },

  {
    path: 'button',
    loadComponent: () =>
      import('./button/button.page').then((m) => m.ButtonPage),
  },

  {
    path: 'card',
    loadComponent: () =>
      import('./card/card.page').then((m) => m.CardPage),
  },

  {
    path: 'checkbox',
    loadComponent: () =>
      import('./checkbox/checkbox.page').then((m) => m.CheckboxPage),
  },

  {
    path: 'chip',
    loadComponent: () =>
      import('./chip/chip.page').then((m) => m.ChipPage),
  },

  {
    path: 'content',
    loadComponent: () =>
      import('./content/content.page').then((m) => m.ContentPage),
  },

  {
    path: 'datetime',
    loadComponent: () =>
      import('./datetime/datetime.page').then((m) => m.DatetimePage),
  },

  {
    path: 'fab',
    loadComponent: () =>
      import('./fab/fab.page').then((m) => m.FabPage),
  },

  {
    path: 'grid',
    loadComponent: () =>
      import('./grid/grid.page').then((m) => m.GridPage),
  },

  {
    path: 'icon',
    loadComponent: () =>
      import('./icon/icon.page').then((m) => m.IconPage),
  },

  {
    path: 'input',
    loadComponent: () =>
      import('./input/input.page').then((m) => m.InputPage),
  },

  {
    path: 'item',
    loadComponent: () =>
      import('./item/item.page').then((m) => m.ItemPage),
  },

  {
    path: 'label',
    loadComponent: () =>
      import('./label/label.page').then((m) => m.LabelPage),
  },

  {
    path: 'list',
    loadComponent: () =>
      import('./list/list.page').then((m) => m.ListPage),
  },

  {
    path: 'menu',
    loadComponent: () =>
      import('./menu/menu.page').then((m) => m.MenuPage),
  },

  {
    path: 'modal',
    loadComponent: () =>
      import('./modal/modal.page').then((m) => m.ModalPage),
  },

  {
    path: 'note',
    loadComponent: () =>
      import('./note/note.page').then((m) => m.NotePage),
  },

  {
    path: 'progress-bar',
    loadComponent: () =>
      import('./progress-bar/progress-bar.page').then((m) => m.ProgressBarPage),
  },

  {
    path: 'radio',
    loadComponent: () =>
      import('./radio/radio.page').then((m) => m.RadioPage),
  },

  {
    path: 'range',
    loadComponent: () =>
      import('./range/range.page').then((m) => m.RangePage),
  },

  {
    path: 'searchbar',
    loadComponent: () =>
      import('./searchbar/searchbar.page').then((m) => m.SearchbarPage),
  },

  {
    path: 'select',
    loadComponent: () =>
      import('./select/select.page').then((m) => m.SelectPage),
  },

  {
    path: 'spinner',
    loadComponent: () =>
      import('./spinner/spinner.page').then((m) => m.SpinnerPage),
  },

  {
    path: 'toggle',
    loadComponent: () =>
      import('./toggle/toggle.page').then((m) => m.TogglePage),
  },

  {
    path: 'toast',
    loadComponent: () =>
      import('./toast/toast.page').then((m) => m.ToastPage),
  },

  {
    path: 'toolbar',
    loadComponent: () =>
      import('./toolbar/toolbar.page').then((m) => m.ToolbarPage),
  },
  {
    path: 'accordion',
    loadComponent: () => import('./accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'breadcrumb',
    loadComponent: () => import('./breadcrumb/breadcrumb.page').then( m => m.BreadcrumbPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'chip',
    loadComponent: () => import('./chip/chip.page').then( m => m.ChipPage)
  },
  {
    path: 'content',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./datetime/datetime.page').then( m => m.DatetimePage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'icon',
    loadComponent: () => import('./icon/icon.page').then( m => m.IconPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./input/input.page').then( m => m.InputPage)
  },
  {
    path: 'item',
    loadComponent: () => import('./item/item.page').then( m => m.ItemPage)
  },
  {
    path: 'label',
    loadComponent: () => import('./label/label.page').then( m => m.LabelPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'note',
    loadComponent: () => import('./note/note.page').then( m => m.NotePage)
  },
  {
    path: 'progress-bar',
    loadComponent: () => import('./progress-bar/progress-bar.page').then( m => m.ProgressBarPage)
  },
  {
    path: 'radio',
    loadComponent: () => import('./radio/radio.page').then( m => m.RadioPage)
  },
  {
    path: 'range',
    loadComponent: () => import('./range/range.page').then( m => m.RangePage)
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./searchbar/searchbar.page').then( m => m.SearchbarPage)
  },
  {
    path: 'select',
    loadComponent: () => import('./select/select.page').then( m => m.SelectPage)
  },
  {
    path: 'spinner',
    loadComponent: () => import('./spinner/spinner.page').then( m => m.SpinnerPage)
  },
  {
    path: 'toggle',
    loadComponent: () => import('./toggle/toggle.page').then( m => m.TogglePage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'toolbar',
    loadComponent: () => import('./toolbar/toolbar.page').then( m => m.ToolbarPage)
  },

];
