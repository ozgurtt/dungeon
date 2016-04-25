import BaseDungeonScreenState from './base_dungeon_screen_state';
import TurnStates from './turn_states';
import { TILE_SIZE, CURSOR_ANIMATION_SPEED, TILE_CENTER } from '../consts';
import { IPlayerActionType } from './iplayer_action_type';
/**
* In this state player can select its action like attack, defense, sleep or interaction with any object on map
*/
export default class PlayerChooseActionState extends BaseDungeonScreenState {

  public onEnter(payload : { spottedMonster: boolean }) : void {
    this.input.onTap.add(this.onPlayerTap, this);
    //TODO if monster was not spotted then move until path is empty
  }

  public onUpdate(delta: number) {
    //console.log(" on update ", delta);
  }

  public onExit() : void {
    this.input.onTap.remove(this.onPlayerTap, this);
  }

  /**
  * In here we check where player did tap on map
  **/
  private onPlayerTap(pointer : Phaser.Pointer, doubleTap : boolean) : void {
    var tapTile : Phaser.Point    = this.level.getTilePositionFor(pointer);

    this.cursor.position.set(tapTile.x * TILE_SIZE + TILE_CENTER, tapTile.y * TILE_SIZE + TILE_CENTER);
    this.cursor.show();

    this.fsm.enter(TurnStates.PERFORM_TURN_ACTIONS, IPlayerActionType.performMoveTo(tapTile));

    //TODO check if tap on enemy
    //TODO check if tap on item
    //TODO check if tap on ground
  }
}
