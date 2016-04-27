import Item from '../item';
import Mob from '../../objects/mob';
import Player from '../../objects/player';
import Character from '../../objects/character';
import GameObject from '../../objects/game_object';
import { PendingTurnAction } from '../../objects/pending_actions/pending_turn_actions';

/**
* Base class describing all weapons in game
*/
abstract class Weapon extends Item {
  /**
  * Character that owns weapon
  */
  protected owner : Mob | Player;

  constructor(game : Phaser.Game, owner : Mob | Player) {
    super(game);
    this.owner = owner;
  }

  /**
  * Return true if attacker can atack target using this weapon
  */
  abstract canAttack(target : Character | Mob | GameObject) : boolean;

  /**
  * Pefrorm attack and create {PendingTurnAction}
  */
  abstract performAttack(target : Character | Mob) : PendingTurnAction<Character>;
}

export default Weapon;
