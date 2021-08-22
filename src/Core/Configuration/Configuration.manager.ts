import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationManager {
    public data: Map<string, any>;

    constructor() {
        this.data = new Map<string, any>();
        this.load();
    }

    private load(): void {
        this.data.clear();

        var dir: string = path.join(__dirname, '../../../');
        var file: string = fs.readFileSync(dir + "/configuration.ini", 'utf-8');

        var splitted: string[] = file.split("\n");
        for (var i = 0; i < splitted.length; i++) {
            if (splitted[i].startsWith("#")) {
                continue;
            }

            var splitted2: string[] = splitted[i].replace("\r", "").split("=");
            this.data.set(splitted2[0], splitted2[1]);
        }
    }

    public getString(key: string): string {
        return this.data.get(key);
    }

    public getInt(key: string): number {
        return parseInt(this.data.get(key));
    }

    public getBoolean(key: string): boolean {
        return (this.data.get(key) == "true");
    }
}